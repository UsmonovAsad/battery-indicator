function $(a) {
	return document.querySelector(a);
}

navigator.getBattery()
	.then(b => {
		const percetage = $(".percentage"),
			percent = $(".percent"),
           	isCharging = $(".isCharging");

        updateLevelInfo();
        updateChargeInfo();

        function updateLevelInfo() {
        	percetage.style.width = b.level * 100 - 5 + "%";
        	percent.innerText = Math.round(b.level * 100) + "%";
        }

        function updateChargeInfo() {
        	isCharging.innerText = b.charging ? "Your Device Charging" : "";
        }
        

        b.addEventListener("levelchange",updateLevelInfo);
        b.addEventListener("chargingchange",updateChargeInfo);
	});