
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstaculos : MonoBehaviour
{
    [SerializeField]
    private float velocidade;

    [SerializeField]
    private float variacaoPosicaoY;

    private void Awake()
    {
        this.transform.Translate(Vector3.up * Random.Range(-variacaoPosicaoY, variacaoPosicaoY));
    }

    // Update is called once per frame
    void Update()
    {
        this.transform.Translate(Vector3.left * this.velocidade * Time.deltaTime);

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        this.Destruir();
    }

    private void Destruir()
    {
        Destroy(this.gameObject);
    }


}
