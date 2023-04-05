module.exports = {
    calAge: (bd) =>{
        let dob = new Date(bd);
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff); 
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }
}