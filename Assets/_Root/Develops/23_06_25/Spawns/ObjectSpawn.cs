using Gamee.Hiuk.Pattern;
using UnityEngine;

public class ObjectSpawn : MonoBehaviour
{
    [SerializeField] private Rigidbody2D rig;
    [SerializeField] private float force = 150f;
    [SerializeField] private float posYToDestroy = -20f;

    public Rigidbody2D Rig => rig;
    public void OnEnable()
    {
        rig.AddForce(new Vector2(Random.Range(0.5f, 1f), Random.Range(0.5f, 1f)) * force);
    }
/*    public void FixedUpdate()
    {
        if (transform.position.y < posYToDestroy)
        {
            PoolManager.ReleaseObject(gameObject);
        }
    }*/
}