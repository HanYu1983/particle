package test.testMacro;
import haxe.ds.StringMap;
import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.macro.Expr.Field;

/**
 * ...
 * @author vic
 */
typedef MethodProfile = {
    var calls:Int;
    var startTime:Float;
    var elapsedTime:Float;
}

class Profiler
{
    private static var profiles:StringMap<StringMap<MethodProfile>> = new StringMap<StringMap<MethodProfile>>();

    /**
     * Reset all the profiling information. Doing this before reading / printing the information will
     * cause all the data collected since the beginning (or last reset) to be lost
     */
    public static function reset()
    {
        profiles = new StringMap<StringMap<MethodProfile>>();
    }

    /**
     * Called at the start of a function to record when in time the method was called. This must always
     * be called BEFORE an endProfile() call is made
     * @param   className   the fully-qualified class name of the method's class
     * @param   methodName  the name of the method being profiled
     */
    public static function startProfile(className:String, methodName:String)
    {
        // make sure the profiles exist
        if (!profiles.exists(className))
            profiles.set(className, new StringMap<MethodProfile>());
        if (!profiles.get(className).exists(methodName))
            profiles.get(className).set(methodName, { calls: 0, startTime: 0, elapsedTime: 0 } );

        #if DEBUG_PROFILING trace("> Starting " + className + "." + methodName); #end

        profiles.get(className).get(methodName).calls++;
        profiles.get(className).get(methodName).startTime = Sys.cpuTime();
    }

    /**
     * Called at the end of a function to calculate the method's execution time. This must always
     * be called AFTER a startProfile() call
     * @param   className   the fully-qualified class name of the method's class
     * @param   methodName  the name of the method being profiled
     */
    public static function endProfile(className:String, methodName:String)
    {
        var t:Float = Sys.cpuTime();

        if (!profiles.exists(className) || !profiles.get(className).exists(methodName))
            throw "EndProfile was called on a function that was never started!";

        profiles.get(className).get(methodName).elapsedTime += t - profiles.get(className).get(methodName).startTime;
        #if DEBUG_PROFILING trace("< Ending " + className + "." + methodName); #end
    }

    /**
     * Just a utility function to print the profiling data, separated by class.
     */
    public static function printProfiles():Void
    {
        var totalTime:Float = 0;
        for (className in profiles.keys())
        {
            var classTime:Float = 0;
            trace(className + ":");
            for (methodName in profiles.get(className).keys())
            {
                trace("  ." + methodName + ": " + profiles.get(className).get(methodName).elapsedTime + "s (" + profiles.get(className).get(methodName).calls + " calls)");
                classTime += profiles.get(className).get(methodName).elapsedTime;
            }
            trace("  ---");
            trace("  " + classTime + "s");
            totalTime += classTime;
        }

        trace("");
        trace("Total time: " + totalTime + "s");
    }
	
	macro public static function profile():Array<Field>
	{
		// get the fields of the class
		var fields:Array<Field> = Context.getBuildFields();
		
		for ( field in fields ) {
			switch( field.kind ) {
				case FFun(func):
					var mn = field.name;
					func.expr = macro {
						trace("before");
						trace( $v { field.name } );
						$ { func.expr };
					};
					
					func.expr = replaceExpressionsReturn('', '', func.expr);
				case _:
			}
		}
		// transform those fields
		// ...
			
		// return the transformed fields
		return fields;
	}
	
	private static function replaceExpressionsReturn(clsName:String, methodName:String, expr:Expr):Expr
	{
		// look for specific expression types
		trace( expr.expr );
		switch(expr.expr)
		{
			// our beloved return expression
			case EReturn(retExpr):
			{
				trace( retExpr );
				return macro {
					var ___tempProfilingReturnValue = ${retExpr};
					trace('after' );
					return ___tempProfilingReturnValue;
				};
				// TODO: transform the return expression!
			}
			case EBlock(blockExprs):
			{
				var i = 0;
				//trace( blockExprs.length );
				
				while (i < blockExprs.length)
				{
					trace( blockExprs[i] );
					blockExprs[i] = replaceExpressionsReturn(clsName, methodName, blockExprs[i]);
					i++;
				}
				return macro $b { blockExprs };
			}
			// don't transform anything else
			default: { }
		}
		return expr;
	}
}