function manageAnimationPreference() {
      const animationEnabledKey = 'pulseAnimationEnabled';

      // Function to save the animation preference
      function saveAnimationPreference(isEnabled) {
        localStorage.setItem(animationEnabledKey, isEnabled);
      }

      // Function to retrieve the animation preference
      function getAnimationPreference() {
        const storedPreference = localStorage.getItem(animationEnabledKey);
        return storedPreference === null ? true : JSON.parse(storedPreference); // Default to enabled
      }

      return {
        save: saveAnimationPreference,
        get: getAnimationPreference,
      };
    }

    const animatedButton = document.getElementById('animatedButton');
    const animationToggle = document.getElementById('animationToggle');
    const animationPreferenceManager = manageAnimationPreference();

    // Function to apply or remove the animation class
    function togglePulseAnimation(enable) {
      if (enable) {
        animatedButton.classList.add('pulse-button');
      } else {
        animatedButton.classList.remove('pulse-button');
        // Optionally, remove inline style that might be left over from hover
        animatedButton.style.animation = '';
      }
      animationPreferenceManager.save(enable);
    }

    // Load the saved preference on page load
    document.addEventListener('DOMContentLoaded', () => {
      const isAnimationEnabled = animationPreferenceManager.get();
      animationToggle.checked = isAnimationEnabled;
      togglePulseAnimation(isAnimationEnabled);
    });

    // Listen for changes on the toggle checkbox
    animationToggle.addEventListener('change', () => {
      togglePulseAnimation(animationToggle.checked);
    });
