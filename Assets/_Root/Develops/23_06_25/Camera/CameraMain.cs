using CustomCamera;
using UnityEngine;

public class CameraMain : FollowCamera2D
{
    [SerializeField] private CameraConfig cameraConfig;

    private bool _isPause = false;
    protected override void LateUpdate()
    {
        if(_isPause) return;
        cameraCenterX = cameraConfig.CameraCenterX;
        cameraCenterY = cameraConfig.CameraCenterY;
        base.LateUpdate();
    }
    public void Pause() => _isPause = true;
}