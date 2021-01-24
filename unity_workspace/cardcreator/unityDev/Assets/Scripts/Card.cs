using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using UnityEngine.Networking;

public class Card : MonoBehaviour, ICardTemplate
{
    public bool runTest;
    public Image myImg;
    Texture2D texture;

    void Start()
    {
        texture = new Texture2D(260, 390);
        CanvasScreenShot.OnPictureTaken += receivePNGScreenShot;
        if (runTest)
        {
            StartCoroutine(PrintImage(Application.persistentDataPath + "/CanvasScreenShot.png", new string[] { "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0G_OFWeKfnAAQ4Vg_KJfFH9Eyxl9R-Q67vVSdrinMbMzJcaA" }));
        }
    }

    void receivePNGScreenShot(byte[] pngArray)
    {
        Debug.Log("這裡很像不會呼叫到?");
        GetComponent<RectTransform>().SetPositionAndRotation(Vector3.zero, Quaternion.identity);
    }
    
    public IEnumerator PrintImage(string output, string[] info)
    {
        var url = info[0];

        // ========= get texture ============= //
        var cachedFileName = UnityWebRequest.EscapeURL(url);
        var cachedPath = Application.persistentDataPath + "/" + cachedFileName;
        if (File.Exists(cachedPath))
        {
            Debug.Log("loadCachedFile: "+cachedPath);
            var loadBytes = File.ReadAllBytes(cachedPath);
            texture.LoadImage(loadBytes);
        }
        else
        {
            WWW www = new WWW(url);
            yield return www;

            www.LoadImageIntoTexture(texture);
            www.Dispose();
            www = null;

            byte[] bytes = texture.EncodeToPNG();
            File.WriteAllBytes(cachedPath, bytes);
            Debug.Log("WriteCachedFile: " + cachedPath);
        }
        // ================================= //
        
        Sprite s = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
        myImg.sprite = s;
        
        ScreenCapture.CaptureScreenshot(output);

        Debug.Log(output);
    }
}
