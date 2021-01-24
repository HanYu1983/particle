using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface ICardTemplate
{
    IEnumerator PrintImage(string output, string[] info);
}

public class Controller : MonoBehaviour
{
    public Card cardTemplate;

    void Start()
    {
        StartCoroutine(StartPrint());
    }

    IEnumerator StartPrint()
    {
        yield return null;
        yield return cardTemplate.PrintImage(Application.persistentDataPath + "/CanvasScreenShot0.png", new string[] { "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0G_OFWeKfnAAQ4Vg_KJfFH9Eyxl9R-Q67vVSdrinMbMzJcaA" });
        yield return cardTemplate.PrintImage(Application.persistentDataPath + "/CanvasScreenShot1.png", new string[] { "http://3.bp.blogspot.com/-5yxG58BC0Ps/Vjf-LHWd2zI/AAAAAAABNE8/plE-kaxx7f8/s1600/26813-boeing-f-15se-silent-eagle-1920x1200-aircraft-wallpaper.jpg" });

    }
}
