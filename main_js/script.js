// CODIGO E DESIGN FEITO TOTALMENTE POR VICTOR HUGO

function primarySecurity() {
    let inputPass = document.getElementById('senha');
    let showBtn = document.getElementById('icon');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        showBtn.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        showBtn.classList.replace('fa-eye-slash', 'fa-eye')
    }

}

function secondSecurity() {
    let inputPassx = document.getElementById('confirm-pass');
    let showBtnn = document.getElementById('icon2');

    if (inputPassx.type === 'password') {
        inputPassx.setAttribute('type', 'text')
        showBtnn.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        inputPassx.setAttribute('type', 'password')
        showBtnn.classList.replace('fa-eye-slash', 'fa-eye')
    }

}

function validarPass() {
    let senha = formulario.senha.value;
    let confirmar_senha = formulario.confirmar_senha.value;

    // CRIADORES
    if (senha == 'Victor_33198519' && confirmar_senha == 'Gabriel_33541272') {
        Swal.fire({
            icon: 'info',
            title: 'Área Restrita!',
            text: 'Você acessou o campo de nossos criadores! 👾',
            confirmButtonColor: '#58AF9C',
        })
        return false;
    }
    else if (senha == 'Gabriel_33541272' && confirmar_senha == 'Victor_33198519') {
        Swal.fire({
            icon: 'info',
            title: 'Área Restrita!',
            text: 'Você acessou o campo de nossos criadores! 👾',
            confirmButtonColor: '#58AF9C',
        })
        return false;

    }
    // VERIFICAÇÃO DE SENHA
    if (senha === "" || senha.length < 6 && confirmar_senha == "" || confirmar_senha.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha os campo de senha com pelo menos 6 caracteres',
            confirmButtonColor: '#58AF9C',
        })
        formulario.senha.focus();
        return false;
    }

    if (senha != confirmar_senha) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha que você digitou parece ser diferente...',
            confirmButtonColor: '#58AF9C',
        })
        formulario.senha.focus();
        return false;
    }

    if (!/[a-z]/.test(senha) || !/[A-Z]/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve conter pelo menos uma letra minúscula e maiúscula',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }

    if (!/[_@#$%&*]/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve conter pelo menos um caractere especial (_@#$%&*)',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }

    if (/987|876|765|654|543|432|321|123|456|789/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha não pode conter sequência decrescente ou crescente de números',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }

    if (/\b\d{3}\b/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha não pode conter sequência de números (ex: 123, 789)',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }

    if (!/\d/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve conter pelo menos um número',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }

    if (/(.)\1\1/.test(senha)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha não pode conter 3 caracteres repetidos',
            confirmButtonColor: '#58AF9C',
        });
        formulario.senha.focus();
        return false;
    }
    alert("Senha cadastrada!")
    return true;
}