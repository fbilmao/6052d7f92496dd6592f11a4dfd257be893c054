        document.addEventListener('DOMContentLoaded', function() {

            var brandText = document.getElementById('brand-text');
            var timeInterval;

            function updateTime() {

                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var seconds = currentTime.getSeconds();
                var milliseconds = currentTime.getMilliseconds();
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
                milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
                return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
            }

            function updateBrandText() {
                brandText.innerHTML = updateTime();
                brandText.classList.remove('blur-text'); // Remove blur class
            }

            timeInterval = setInterval(updateBrandText, 0);
            brandText.addEventListener('mouseover', function() {
                if (!brandText.classList.contains('blur-text')) {
                    brandText.classList.add('blur-text'); // Add blur class only if not already blurred
                }
                clearInterval(timeInterval);
                setTimeout(function() {
                    var placeholders = [" Welcome!", " insert meme string", " Main", " Ethical and leet", " Operating since 1991!", " Hosted on the moon!", " very pasted", " bypassing BSOD!", " Big forum name", " 13:37:00", " skrrr."];
                    var randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
                    brandText.innerHTML = randomPlaceholder;
                    brandText.classList.remove('blur-text'); // Remove blur class
                }, 300);
            });

            brandText.addEventListener('mouseout', function() {
                brandText.classList.add('blur-text'); // Add blur class
                setTimeout(function() {
                    updateBrandText();
                    brandText.classList.remove('blur-text'); // Remove blur class
                    // Resume updating time after easing out
                    timeInterval = setInterval(updateBrandText, 0);
                }, 300);
            });
        });

        document.addEventListener('DOMContentLoaded', function() {

            var themes = [
                'theme-red',
                'theme-orange',
                'theme-yellow',
                'theme-lime',
                'theme-green',
                'theme-teal',
                'theme-cyan',
                'theme-blue',
                'theme-purple',
                'theme-pink',
                'theme-indigo',
            ];

            var currentThemeIndex = 0;
            var switchThemeMenuItem = document.querySelector('.menu-item-switch-theme');
            var notificationContainer = document.querySelector('.dropdown-menu');
            var isRGBModeEnabled = false;
            var lastNotificationItem = null;
            var notificationShownAfterSwitch = false;

            function switchTheme() {
                if (isRGBModeEnabled) {
                    document.body.classList.remove(themes[currentThemeIndex]);
                    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
                    document.body.classList.add(themes[currentThemeIndex]);
                    if (!notificationShownAfterSwitch) {
                        var message = isRGBModeEnabled ? 'RGB Mode enabled' : 'RGB Mode disabled';
                        showNotification(message);
                        notificationShownAfterSwitch = true;
                    }
                }
            }

            var switchInterval = setInterval(switchTheme, 1000); // Set the interval to match the text switching time
            switchThemeMenuItem.addEventListener('click', function() {
                isRGBModeEnabled = !isRGBModeEnabled;

                var message = isRGBModeEnabled ? 'RGB Mode enabled' : 'RGB Mode disabled';
                showNotification(message);
                notificationShownAfterSwitch = false;
                if (!isRGBModeEnabled) {
                    clearInterval(switchInterval);
                }

                var profileImage = document.getElementById('profileImage');
                profileImage.src = isRGBModeEnabled ? 'https://raw.githubusercontent.com/fbilmao/ffff/main/avatar_rgb.gif' : 'https://raw.githubusercontent.com/fbilmao/ffff/main/avatar.gif';
            });

            function showNotification(message) {
                if (lastNotificationItem) {
                    notificationContainer.removeChild(lastNotificationItem);
                }

                var notificationItem = document.createElement('a');
                notificationItem.href = '#';
                notificationItem.className = 'd-flex align-items-center py-10px dropdown-item text-wrap';
                notificationItem.innerHTML = `
                    <div class="fs-20px">
                        <i class="bi bi-eyedropper text-theme"></i>
                    </div>
                    <div class="flex-1 flex-wrap ps-4">
                        <div class="mb-1 text-white">${message}</div>
                        <div class="small">JUST NOW</div>
                    </div>
                    <div class="ps-2 fs-16px">
                        <i class="bi bi-chevron-right"></i>
                    </div>
                `;
                lastNotificationItem = notificationItem;
                notificationContainer.appendChild(notificationItem);
            }
        });
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', e => {
            cursor.style.display = 'block';
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        });
        document.addEventListener('mouseleave', e => {
            cursor.style.display = 'none';
        });