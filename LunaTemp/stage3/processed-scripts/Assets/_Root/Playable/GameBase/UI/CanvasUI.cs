using UnityEngine;

public class CanvasUI : MonoBehaviour
{
    [SerializeField] PopupWin popupWin;
    [SerializeField] PopupLose popupLose;

    public void ShowWin() { popupWin?.Show(); }
    public void ShowLose() { popupLose?.Show(); }
}