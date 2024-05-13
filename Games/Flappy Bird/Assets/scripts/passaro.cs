using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class passaro : MonoBehaviour
{
    Rigidbody2D fisica;

    private void Awake()
    {
        this.fisica = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            this.Impulsionar();
        }
    }

    private float velocidade = 3;

    void Impulsionar()
    {
        this.fisica.AddForce(Vector2.up * this.velocidade, ForceMode2D.Impulse);
    }


}