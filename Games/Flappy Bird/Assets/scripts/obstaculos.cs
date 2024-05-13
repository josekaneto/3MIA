using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstaculos : MonoBehaviour
{
    [SerializeField]
    private float velocidade = 0.6f;

    // Update is called once per frame
    void Update()
    {
        this.transform.Translate(Vector3.left * this.velocidade * Time.deltaTime);

    }
}
