// you are a student,
// and I want to know if the action you're trying to do
// is allowed for you ?

module.exports = (capability) => {
    return (req, res, next) => {
        // user is already logged-in 
        // req.user.capabilities > do I have the capability? 
        console.log("capability >>> ", capability);
        console.log("req.user.capabilities:", req.user.capabilities);
        try {
            if(req.user.capabilities.includes(capability)) {
                next();
            } else {
                next('Access Denied/ Not Allowed');
            }
        } catch(err) {
            next('No Capabilities Found!!')
        }
       
    }
}