var carPriceInput = document.getElementById('carPrice');
        var downPaymentInput = document.getElementById('downPayment');
        var loanTermInput = document.getElementById('loanTerm');
        
        var monthlyInstallmentDisplay = document.getElementById('monthlyInstallmentDisplay');
        var interestRateDisplay = document.getElementById('interestRateDisplay');

        function getAnnualInterestRate(months) {
            if (months <= 24) return 8.5;
            if (months <= 48) return 10.0;
            return 11.5;
        }

        function calculateLoan() {
            var price = parseFloat(carPriceInput.value) || 0;
            var downPayment = parseFloat(downPaymentInput.value) || 0;
            var months = parseInt(loanTermInput.value) || 12;

            if (price <= 0 || downPayment >= price) {
                monthlyInstallmentDisplay.textContent = "$0";
                interestRateDisplay.textContent = "0%";
                return;
            }

            var loanAmount = price - downPayment;
            var annualRate = getAnnualInterestRate(months);
            var years = months / 12;

            var totalInterest = loanAmount * (annualRate / 100) * years;
            var totalPayable = loanAmount + totalInterest;
            var monthlyPayment = totalPayable / months;

            interestRateDisplay.textContent = annualRate + "%";
            monthlyInstallmentDisplay.textContent = "$" + Math.round(monthlyPayment);
        }

        carPriceInput.addEventListener('input', calculateLoan);
        downPaymentInput.addEventListener('input', calculateLoan);
        loanTermInput.addEventListener('change', calculateLoan);