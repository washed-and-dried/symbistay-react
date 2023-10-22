import "../styles/contact.css"

export default function Contact() {
    return (
        <>
            <div class="contact-container">
                <form method="get">
                    <table border="0" cellspacing="5em">
                        <tr>
                            <td><label for="firstname">First Name</label></td>
                            <td><input type="text" name="firstname" id="firstname" ></input></td>
                            <td><label for="lastname">Last Name</label></td>
                            <td><input type="text" name="lastname" id="lastname"></input></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email Address</label></td>
                            <td colspan="2"><input type="email" name="email" id="email"></input></td>

                        </tr>
                        <tr>
                            <td><label for="message">Message</label></td>
                            <td colspan="3" rowspan="2"><textarea name="message" id="message" cols="3" rows="3"></textarea></td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td></td>
                            <td><button type="button" id="contact-submit">Submit</button></td>
                        </tr>
                    </table>
                </form>


            </div>
        </>
    )
}