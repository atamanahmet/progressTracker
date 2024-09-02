let currentProgress = 0;
      const fullCourse = 373;
      
      document.getElementById("submitBtn").onclick = function () {
        currentProgress = document.getElementById("inputUser").value;
        currentProgress = Number(currentProgress);
        progressPercent = (currentProgress * 100) / 373;
        progressPercent = progressPercent.toFixed(2);
        document.getElementById("result").textContent = `${progressPercent} %`;
        document.getElementById("extra").textContent = "is done";
      };

