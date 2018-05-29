module.exports = PhoneNumber;
function PhoneNumber(phoneNo){
this.phoneNo=phoneNo;
}

PhoneNumber.prototype.number=function(){
    if (this._phoneNo.match(/[a-zA-Z@:!]/i)) {
    	return null;
	}

    cleanedNumber1 = this._phoneNo.replace(/[^\w]/g, '');
}
