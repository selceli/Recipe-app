export const ControlledInput = () => {
    const [emailInput, setEmailInput] = () => {

        const handleSubmit = () => {
            emailInput.preventDefault();
        }
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Controlled email</label>
                <input type="email"
                    id="email"
                    name="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@gmail.com"
                />
                <input type="submit" value="update email" />
            </form>
        )
    }
}