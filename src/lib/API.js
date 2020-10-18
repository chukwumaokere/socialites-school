export default {
    async SubmitForm(data){
        let res = {};
        console.log('submitting form', data);
        //send email to school@socialites.app
        //send confirmation email to data.email
        //Email will take them to finish sign up page with steps https://wikiki.github.io/components/steps/
        //create account
        if(res.ok == 200){
            return {
                success: true,
            }
        }
        return {
            success: false,
        }
    },
    async Login(details){
        console.log('trying to login')
        let valid = true;

        if(valid){
            return {
                success: true,
                data: {details}
            };
        }
        return {
            success: false
        }
    },
}