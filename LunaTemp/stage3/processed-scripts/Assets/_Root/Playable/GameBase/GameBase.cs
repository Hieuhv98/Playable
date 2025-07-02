using UnityEngine;
public class GameBase : MonoBehaviour
{
    [SerializeField] CanvasUI canvasUI;
    [SerializeField] LevelBase levelBase;

    private void OnEnable()
    {
        if (levelBase)
        {
            levelBase.ActionWin += Win;
            levelBase.ActionLose += Lose;
        }
    }
    private void OnDisable()
    {
        if (levelBase)
        {
            levelBase.ActionWin -= Win;
            levelBase.ActionLose -= Lose;
        }
    }
    public void Win() { canvasUI?.ShowWin(); }
    public void Lose() { canvasUI?.ShowLose(); }
}