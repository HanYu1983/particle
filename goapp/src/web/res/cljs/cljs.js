goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../tool/dialog.js", ['tool.dialog'], ['cljs.core', 'clojure.string']);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../gl/texture.js", ['gl.texture'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers', 'goog.async.nextTick']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../gl/util.js", ['gl.util'], ['cljs.core']);
goog.addDependency("../ai/ann.js", ['ai.ann'], ['cljs.core']);
goog.addDependency("../test/stock2.js", ['test.stock2'], ['cljs.core', 'ai.ann']);
goog.addDependency("../gl/shader.js", ['gl.shader'], ['cljs.core', 'gl.texture']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'cljs.core.async.impl.timers']);
goog.addDependency("../test/stock.js", ['test.stock'], ['cljs.core', 'cljs.core.async', 'ai.ann']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../app/particle.js", ['app.particle'], ['cljs.core']);
goog.addDependency("../app/react.js", ['app.react'], ['cljs.core', 'cljs.core.async']);
goog.addDependency("../test/dialog.js", ['test.dialog'], ['cljs.core', 'cljs.core.async', 'tool.dialog']);
goog.addDependency("../gl/mesh.js", ['gl.mesh'], ['cljs.core']);
goog.addDependency("../clojure/data.js", ['clojure.data'], ['cljs.core', 'clojure.set']);
goog.addDependency("../app/main.js", ['app.main'], ['gl.shader', 'app.particle', 'cljs.core', 'app.react', 'cljs.core.async', 'gl.texture', 'gl.mesh', 'clojure.data', 'clojure.walk', 'gl.util']);
goog.addDependency("../test/dialogList.js", ['test.dialogList'], ['cljs.core', 'cljs.core.async', 'tool.dialog']);
goog.addDependency("../app/main2.js", ['app.main2'], ['gl.shader', 'app.particle', 'cljs.core', 'cljs.core.async', 'gl.texture', 'gl.mesh', 'gl.util']);
goog.addDependency("../test/ann.js", ['test.ann'], ['cljs.core', 'cljs.core.async', 'ai.ann']);
goog.addDependency("../test/ann_xor.js", ['test.ann_xor'], ['cljs.core', 'cljs.core.async', 'clojure.walk', 'ai.ann']);