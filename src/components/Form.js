
import { useEffect, useState } from 'react';


const Form = () =>{
    
    const [alertShown, setAlertShown] = useState(false); // Para controlar si ya se mostró el alert

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get('status');

        // Solo mostrar el alert si aún no se ha mostrado
        if (status === 'success' && !alertShown) {
            alert('Usuario registrado con éxito');
            setAlertShown(true); // Marca que el alert ya se mostró
            // Limpiar la URL para que no se siga mostrando el alert al recargar
            window.history.replaceState({}, '', window.location.pathname);
        } else if (status === 'login-failed' && !alertShown) {
            alert('Error en el login: Usuario o contraseña incorrectos');
            setAlertShown(true); // Marca que el alert ya se mostró
            // Limpiar la URL para que no se siga mostrando el alert al recargar
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, [alertShown]); // Dependencia en alertShown para evitar múltiples alertas

  

    return(
        <div>
            <form action="http://127.0.0.1:3001/" method="POST" >
                <div className='divBotones'>
                    <button type="submit" className="botonLog" onClick={() => (document.querySelector('[name="action"]').value = 'signup')}>SIGNUP</button>
                    <button type="submit" className="botonLog" onClick={() => (document.querySelector('[name="action"]').value = 'login')}>LOGIN</button>
                </div>
                <div className='divForm'>
                    <div className="form-group">
                        <label for="username">Username: </label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username" name="username" required></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="text" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter your password" name="password" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role: </label>
                        <select id="role" className="form-control" name="role" required>
                            <option value="mecanico">Mecánico</option>
                            <option value="encargado">Encargado</option>
                        </select>
                    </div>
                    <input type="hidden" name="action" value="signup" />
                </div>
            </form>
        </div>
    );
      
    
}

export default Form;