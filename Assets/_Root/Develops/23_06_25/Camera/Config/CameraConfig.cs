using UnityEngine;
[CreateAssetMenu(fileName = "camera_config", menuName = "Game/Camera Config", order = 1)]
public class CameraConfig : ScriptableObject
{
    [SerializeField] private float cameraCenterX = 0.5f;
    [SerializeField] private float cameraCenterY = 0.25f;

    private float _cameraCenterXCache = 0.5f;
    private float _cameraCenterYCache = 0.25f;
    private void OnEnable()
    {
        _cameraCenterXCache = cameraCenterX;
        _cameraCenterYCache = cameraCenterY;
    }
    private void OnDisable()
    {
        cameraCenterX = _cameraCenterXCache;
        cameraCenterY = _cameraCenterYCache;    
    }
    public float CameraCenterX 
    {
        set => cameraCenterX = value;
        get => cameraCenterX;
    }
    public float CameraCenterY 
    {
        set => cameraCenterY = value;
        get => cameraCenterY;
    }
}