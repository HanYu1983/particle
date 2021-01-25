using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using UnityEngine.Networking;
using System;

public class Card : MonoBehaviour, ICardTemplate
{
    public bool runTest;

    public GameObject CardType;
    public GameObject[] CardTypeIcons;

    public GameObject[] CardFronts;


    public Image CardImage;
    Texture2D texture;

    void Start()
    {
        texture = new Texture2D(260, 390);
        if (runTest)
        {
            StartCoroutine(PrintImage(Application.persistentDataPath + "/CanvasScreenShot.png", new string[] { "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0G_OFWeKfnAAQ4Vg_KJfFH9Eyxl9R-Q67vVSdrinMbMzJcaA" }));
        }
    }
    
    public IEnumerator PrintImage(string output, string[] info)
    {
        var url = info[13];
        // ========= get texture ============= //
        GetTexture:
        if (url != null && url.Length >= 0)
        {
            var cachedFileName = UnityWebRequest.EscapeURL(url);
            var cachedPath = Application.persistentDataPath + "/cache/" + cachedFileName;
            if (File.Exists(cachedPath))
            {
                Debug.Log("loadCachedFile: " + cachedPath);
                var loadBytes = File.ReadAllBytes(cachedPath);
                texture.LoadImage(loadBytes);
            }
            else
            {
                WWW www = new WWW(url);
                yield return www;

                if (www.error != null) {
                    Debug.Log("load error: " + www.error);
                    Debug.Log("error url:" + url);
                    goto GetTexture;
                }

                www.LoadImageIntoTexture(texture);
                www.Dispose();
                www = null;

                byte[] bytes = texture.EncodeToPNG();
                File.WriteAllBytes(cachedPath, bytes);
                Debug.Log("WriteCachedFile: " + cachedPath);
            }
            CardImage.sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
        }
        // ================================= //

        ScreenCapture.CaptureScreenshot(output);

        Debug.Log(output);
    }
}
