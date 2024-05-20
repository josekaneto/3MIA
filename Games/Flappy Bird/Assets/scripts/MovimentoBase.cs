using UnityEngine;

public class MovimentoBase : MonoBehaviour
{
    [SerializeField]
    private float velocidade = 0.6f;
    private Vector3 prosicaoInical;
    private float tamanhoImagemCena;

    private void Awake()
    {
        prosicaoInical = this.transform.position;
        float tamanhoDaImagemOriginal = GetComponent<SpriteRenderer>().size.x;
        float escala = this.transform.localScale.x;
        float tamanhoI = tamanhoDaImagemOriginal * escala;
    }
    // Update is called once per frame
    void Update()
    {
        float deslocamento = Mathf.Repeat(this.velocidade * Time.time, tamanhoImagemCena);
        this.transform.position = this.prosicaoInical + Vector3.left * deslocamento;

    }
}
