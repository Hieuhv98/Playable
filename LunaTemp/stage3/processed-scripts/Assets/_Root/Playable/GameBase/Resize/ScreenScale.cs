using UnityEngine;

public class ScreenScale : MonoBehaviour
{
    [SerializeField] private Vector2 screenSizeOrigin = new Vector2(1080, 1920);
    [SerializeField] private Camera cameraTarget;

    float _fieldOfView;
    float _aspectOrigin;
    float _aspect;
    float _reNativeValue;

    private void Awake()
    {
        _fieldOfView = cameraTarget.orthographicSize;
        _aspectOrigin = screenSizeOrigin.x / screenSizeOrigin.y;
        _aspect = cameraTarget.aspect;

        ReNative();
    }

    private void Start()
    {
        cameraTarget.depthTextureMode |= DepthTextureMode.Depth;
    }

    private void ReNative()
    {
        _reNativeValue = _aspectOrigin / _aspect;
        cameraTarget.orthographicSize = _fieldOfView * _reNativeValue;
        CheckDeviceResolution();
    }

    private void CheckDeviceResolution()
    {
        if (_aspect > 1.5f)
        {
            cameraTarget.orthographicSize *= 3f;
        }
        else if (_aspect > 1.0f)
        {
            cameraTarget.orthographicSize *= 1.5f;
        }
        else if (_aspect > 0.6f)
        {
            cameraTarget.orthographicSize *= 1.4f;
        }
    }
    private void Update()
    {
        if (_aspect != cameraTarget.aspect)
        {
            _aspect = cameraTarget.aspect;
            ReNative();
        }
    }
}