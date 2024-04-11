import React from 'react'

export const Register = () => {


    const [userInfo, setUserInfo] = ({ userName: '', email: '', password: '' })

    let handleInputs = (event) => {
        event.preventDefault();
        setUserInput({ [event.target.name]: event.target.value })
    }


    let handleRegister = async (e) => {
        if (userInfo.password != userInfo.confirmPassword) {
            try {
                const response = await fetch('https://example.com/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                // Registration successful, you can redirect or perform other actions
            } catch (error) {
                console.error('Error registering user:', error);
                // Handle error (e.g., display error message)
            }
        }

        else {
            alert("Password and Confirm Password must match!!!")
        }
        setUserName({ userName: '', email: '', password: '' })
    }

    return (
        <>
            <h1>Create Account</h1>
            {/* form to register */}
            <form onSubmit={handleRegister}>
                {/* insert username */}
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleInputs}
                    placeholder="Username"
                    required
                />
                <br />
                {/* insert email */}
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputs}
                    placeholder="Email"
                    required
                />
                <br />
                {/* insert password */}
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleInputs}
                    placeholder="Password"
                    required
                />
                <br />
                {/* insert re-confirmed password */}
                <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    onChange={handleInputs}
                    placeholder="Confirm Password"
                    required
                />
                <br />
                {/* submit button */}
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}
