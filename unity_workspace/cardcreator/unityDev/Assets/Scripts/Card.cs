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
    public Color[] CardTypeColors;
    public Color[] ValueColors;

    public GameObject valueBar;
    public Text lblCardName;
    public Text lblCost;
    public Text lblContentName;
    public Text lblContent;
    public Text lblHeight;
    public Text lblBullet;
    public Text lblDetect;
    public Text lblHide;
    public Text lblArmor;
    public Text lblHeal;

    public Image CardImage;
    Texture2D texture;

    void Awake()
    {
        texture = new Texture2D(260, 390);
    }

    void Start()
    {
        if (runTest)
        {
            StartCoroutine(PrintImage(Application.persistentDataPath + "/CanvasScreenShot.png", new string[] { "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ0G_OFWeKfnAAQ4Vg_KJfFH9Eyxl9R-Q67vVSdrinMbMzJcaA" }));
        }
    }

    void SetCardColor(int colorId)
    {
        foreach (GameObject node in CardFronts)
        {
            node.GetComponent<Image>().color = CardTypeColors[colorId];
        }
    }

    void SetValueColor(Text target, string value, int min, int max)
    {
        if(value == "")
        {
            target.color = ValueColors[0];
            return;
        }

        var valueNumber = Int16.Parse(value);

        if (valueNumber <= 0)
        {
            target.color = ValueColors[0];
        }
        if (valueNumber <= min)
        {
            target.color = ValueColors[1];
        }
        else if (valueNumber >= max)
        {
            target.color = ValueColors[3];
        }
        else
        {
            target.color = ValueColors[2];
        }
    }
    
    public IEnumerator PrintImage(string output, string[] info)
    {
        var cardType = info[1];
        var cardName = info[2];
        var armyType = info[3];
        var nation = info[4];
        var cost = info[5];
        var height = info[6];
        var detect = info[7];
        var hide = info[8];
        var armor = info[9];
        var heal = info[10];
        var content = info[11];
        var bullet = info[12];
        var url = info[13];

        //Debug.Log("cardType:" + cardType);
        //Debug.Log("cardName:" + cardName);
        //Debug.Log("armyType:" + armyType);
        //Debug.Log("nation:" + nation);
        //Debug.Log("cost:" + cost);
        //Debug.Log("height:" + height);
        //Debug.Log("detect:" + detect);
        //Debug.Log("hide:" + hide);
        //Debug.Log("armor:" + armor);
        //Debug.Log("heal:" + heal);
        //Debug.Log("content:" + content);
        //Debug.Log("bullet:" + bullet);

        CardFronts[0].SetActive(false);
        CardFronts[1].SetActive(false);

        if (cardType == "部隊" || cardType == "建築")
        {
            CardType.SetActive(true);
            CardFronts[0].SetActive(true);
            valueBar.SetActive(true);
        }
        else
        {
            CardType.SetActive(false);
            CardFronts[1].SetActive(true);
            valueBar.SetActive(false);
            foreach (GameObject node in CardFronts)
            {
                node.GetComponent<Image>().color = Color.blue;
            }
        }

        if(cardType == "部隊")
        {
            SetCardColor(0);
        }
        else if (cardType == "情境")
        {
            SetCardColor(1);
        }
        else if (cardType == "建築")
        {
            SetCardColor(2);
        }
        else
        {
            SetCardColor(3);
        }
        // ============ check card type =============== //
        foreach (GameObject node in CardTypeIcons)
        {
            node.SetActive(false);
        }

        if (cardType == "建築")
        {
            CardTypeIcons[0].SetActive(true);
        }
        else
        {
            if (height == "陸")
            {
                if (armyType == "兵")
                {
                    CardTypeIcons[3].SetActive(true);
                }
                else
                {
                    CardTypeIcons[1].SetActive(true);
                }
            }
            else
            {
                CardTypeIcons[2].SetActive(true);
            }
        }
        // ================================= //

        lblCardName.text = cardName;
        lblContentName.text = cardType + "-" + armyType;
        lblCost.text = cost;
        lblHeight.text = height;
        lblBullet.text = "彈" + bullet;
        lblDetect.text = "偵" + detect;
        lblHide.text = "隱" + hide;
        lblArmor.text = "甲" + armor;
        lblHeal.text = "耐" + heal;
        lblContent.text = content;
        
        SetValueColor(lblDetect, detect, 2, 5);
        SetValueColor(lblHide, hide, 2, 5);
        SetValueColor(lblArmor, armor, 6, 18);
        SetValueColor(lblHeal, heal, 3, 8);

        // ========= get texture ============= //
        CardImage.sprite = null;
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
                    goto OutputImage;
                }

                www.LoadImageIntoTexture(texture);
                www.Dispose();
                www = null;

                try
                {
                    byte[] bytes = texture.EncodeToPNG();
                    File.WriteAllBytes(cachedPath, bytes);
                    Debug.Log("WriteCachedFile: " + cachedPath);
                }
                catch(Exception e)
                {
                    Debug.Log("WriteCachedError: " + e.Message);
                }
            }
            CardImage.sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
        }
        // ================================= //
        OutputImage:

        ScreenCapture.CaptureScreenshot(output);

        Debug.Log(output);
    }
}
