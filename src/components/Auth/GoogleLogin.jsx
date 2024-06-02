import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';


const GoogleLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="bg-blue-400 px-5 py-3 w-full rounded-lg">Login With Google</button>
        </div>
    );
};

export default GoogleLogin;