using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using System.Linq;

public interface ICardTemplate
{
    IEnumerator PrintImage(string output, string[] info);
}

[System.Serializable]
public struct Env
{
    public string output;
    public string input;
}

public class Helper
{
    static public string[][] SplitTsvGrid(string csvText)
    {
        var ret = new List<string[]>();
        string[] lines = csvText.Split("\n"[0]);
        for (int y = 0; y < lines.Length; y++)
        {
            string[] row = lines[y].Split("\t"[0]);
            ret.Add(row);
        }
        return ret.ToArray();
    }
}

public class Controller : MonoBehaviour
{
    public Card cardTemplate;

    void Start()
    {
        var env = LoadEnv(Application.persistentDataPath + "/env.json");
        var csv = LoadCsv(Application.persistentDataPath + "/"+env.input);
        StartCoroutine(StartPrint(env.output, csv));
    }

    Env LoadEnv(string path)
    {
        if (File.Exists(path) == false)
        {
            throw new System.Exception("env.json not found");
        }
        var text = File.ReadAllText(path);
        return JsonUtility.FromJson<Env>(text);
    }

    string[][] LoadCsv(string path)
    {
        if (File.Exists(path) == false)
        {
            throw new System.Exception(path+" not found");
        }
        var text = File.ReadAllText(path);
        return Helper.SplitTsvGrid(text);
    }

    IEnumerator StartPrint(string outputDir, string[][] csv)
    {
        for (var y = 1; y < csv.Length; ++y)
        {
            var info = new string[csv[0].Length];
            for (var x = 0; x < info.Length; ++x)
            {
                info[x] = csv[y][x];
            }
            var outputPath = Application.persistentDataPath + "/" + outputDir + "/" + info[0] + ".png";
            yield return cardTemplate.PrintImage(outputPath, info);
        }
    }
}
