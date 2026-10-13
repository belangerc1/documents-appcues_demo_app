/*
  Central place for identifying the current user and their group (account) in Appcues.
  Everything persists in localStorage so the same user/group is re-identified on refresh.

  User properties:  createdAt, role, email, language
  Group properties: planTier
*/

const DEFAULTS = {
  userId: "testUser",
  groupId: "testAccount",
  role: "tester",
  planTier: "pro",
};

// Reads the stored test user/group, filling in defaults the first time the app loads
export const getProfile = () => {
  const ls = window.localStorage;
  if (!ls.currentUser) ls.setItem("currentUser", DEFAULTS.userId);
  if (!ls.timestamp) ls.setItem("timestamp", Date.now());
  if (!ls.currentGroup) ls.setItem("currentGroup", DEFAULTS.groupId);
  if (!ls.planTier) ls.setItem("planTier", DEFAULTS.planTier);

  const userId = ls.currentUser;
  return {
    userId,
    groupId: ls.currentGroup,
    user: {
      createdAt: parseInt(ls.timestamp, 10), // UNIX timestamp (ms)
      role: ls.role || DEFAULTS.role,
      email: ls.email || `${userId}@example.com`,
      language: (navigator.language || "en").split("-")[0], // e.g. "en"
    },
    group: {
      planTier: ls.planTier,
    },
  };
};

// Sends identify + group to Appcues for whoever is stored as the current user
export const identifyCurrentUser = () => {
  const { userId, groupId, user, group } = getProfile();
  window.Appcues.identify(userId, user);
  window.Appcues.group(groupId, group);
};

// Clears the stored test user/group (used by the Appcues.reset() toolbar button)
export const clearProfile = () => {
  ["currentUser", "timestamp", "currentGroup", "planTier", "email", "role"].forEach((key) =>
    window.localStorage.removeItem(key)
  );
};
