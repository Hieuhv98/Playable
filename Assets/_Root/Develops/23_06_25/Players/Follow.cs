using UnityEngine;

public class Follow : MonoBehaviour
{
    [SerializeField] Rigidbody2D rig;
    [SerializeField] private GameObject target;
    [SerializeField] private float rotationSpeed = 5f;
    [SerializeField] private float positionSpeed = 5f;
    [SerializeField] private LayerMask layer;
    [SerializeField] Collider2D col;
    [SerializeField] float offsetX = 8;

    public void Update()
    {
        if (target != null)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, target.transform.rotation, rotationSpeed * Time.deltaTime);
            transform.position = Vector3.Lerp(rig.position, target.transform.position, positionSpeed * Time.deltaTime);
            col.offset = new Vector2(Mathf.Lerp(col.offset.x, transform.localEulerAngles.z > 180 && transform.localEulerAngles.z < 300 ? offsetX : -offsetX, positionSpeed * Time.deltaTime), col.offset.y);
        }
    }
    public void ActiveCol() => col.enabled = true;
    public void DeActiveCol() => col.enabled = false;
}