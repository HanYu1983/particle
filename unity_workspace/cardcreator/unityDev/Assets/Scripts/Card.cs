using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Card : MonoBehaviour
{
    public Image myImg;

    public Canvas canvas;

    // Start is called before the first frame update
    void Start()
    {
        yourMethod();

        CanvasScreenShot.OnPictureTaken += receivePNGScreenShot;
    }

    void receivePNGScreenShot(byte[] pngArray)
    {
        //Debug.Log(GetComponent<RectTransform>().position);
        Debug.Log("Picture taken");

        GetComponent<RectTransform>().SetPositionAndRotation(Vector3.zero, Quaternion.identity);

        //Do Something With the Image (Save)

       // string path = Application.persistentDataPath + "/CanvasScreenShot.png";
       // System.IO.File.WriteAllBytes(path, pngArray);
       // Debug.Log(path);
    }

    public void yourMethod()
    {
        StartCoroutine(setImage("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0G_OFWeKfnAAQ4Vg_KJfFH9Eyxl9R-Q67vVSdrinMbMzJcaA")); //balanced parens CAS
    }

    IEnumerator setImage(string url)
    {
        Texture2D texture = new Texture2D(260, 390);


        WWW www = new WWW(url);
        yield return www;

        // calling this function with StartCoroutine solves the problem
        Debug.Log("Why on earh is this never called?");

        www.LoadImageIntoTexture(texture);
        www.Dispose();
        www = null;

        Sprite s = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
        myImg.sprite = s;

        //GetComponent<CanvasScreenShot>().takeScreenShot(canvas, SCREENSHOT_TYPE.IMAGE_AND_TEXT, false);

        string path = Application.persistentDataPath + "/CanvasScreenShot.png";
        ScreenCapture.CaptureScreenshot(path);

        Debug.Log(path);

    }
}
