import { useState } from "react";
import  emailjs  from '@emailjs/browser' 

function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function EnviarEmail(e){
        e.preventDefault();
        if(name === "" || email === "" || mensagem === ""){
            alert("Preencha todos os campos corretamente!")
            return
        }

        const templateParms = { 
            from_name: name,
            message:mensagem,
            email:email
        }

        emailjs.send("service_5v1p42q", "template_9rvcz2a",templateParms, "Rkmh0Mj2yBUfq8CCY")
        .then((Response) => {
            console.log("EMAIL ENVIADO", Response.status, Response.text)
            setName('')
            setEmail('')
            setMensagem('')
        }, (err)=>{
            console.log("ERRO: ", err)
        })
        
    }


    return ( 
        <div className="flex my-20">
        <div className="w-2/4 p-24">
            <div className="w-3/4">
                <h1 className="font-font-sub text-7xl text-white">Dúvidas e suporte, entre em contato:</h1>
            </div>
        </div>
        <div className="h-auto bg-white w-1 "  />
        <form onSubmit={EnviarEmail} className="w-2/4 flex flex-col justify-center items-center">
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white"  htmlFor="nome">Nome:</label>
                <input onChange={(e) => setName(e.target.value)} placeholder='exemplo' className="w-3/4 rounded-full bg-secondary-kaneto focus:outline-none p-2" type="text" value={name} />
            </div>
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white" htmlFor="email">E-mail:</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@gmail.com" className="w-3/4 rounded-full bg-secondary-kaneto focus:outline-none p-2" type="email" value={email} />
            </div>
            <div className="w-[74%] flex flex-col mb-4">
                <label className="text-2xl text-white mb-4" htmlFor="mensagem">Mensagem :</label>
                <textarea onChange={(e) => setMensagem(e.target.value)} className="rounded-2xl bg-secondary-kaneto focus:outline-none p-2" id="mensagem" cols="30" rows="10" value={mensagem} ></textarea>
            </div>
            <input className="rounded-lg py-3 px-24 text-white bg-primary-kaneto mt-5" type="submit" value="Enviar" />
        </form>
        </div>
    );
}

export default Contato;