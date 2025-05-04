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

const animationPreferenceManager = manageAnimationPreference();
