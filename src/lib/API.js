export default {
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
    }
}