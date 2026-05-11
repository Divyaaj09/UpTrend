// src/academy/academyProgress.js

const STORAGE_KEY = "academy_progress_v2";

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Ensure module structure exists
function ensureModule(moduleId) {
  const data = load();
  if (!data[moduleId]) {
    data[moduleId] = {
      topicsCompleted: [],
      quizPassed: false,
    };
    save(data);
  }
  return data;
}

// ✅ Called when a topic is finished
export function markTopicComplete(moduleId, topicId) {
  const data = ensureModule(moduleId);
  if (!data[moduleId].topicsCompleted.includes(topicId)) {
    data[moduleId].topicsCompleted.push(topicId);
    save(data);
  }
}

// ✅ Called when quiz is passed
export function markQuizPassed(moduleId) {
  const data = ensureModule(moduleId);
  data[moduleId].quizPassed = true;
  save(data);
}

// ✅ Used by Dashboard / AcademyHome
export function getModuleProgress(moduleId) {
  const data = ensureModule(moduleId);
  return data[moduleId];
}

// ✅ Used to check unlock
export function isModuleUnlocked(modules, moduleIndex) {
  if (moduleIndex === 0) return true;

  const prevModule = modules[moduleIndex - 1];
  const progress = getModuleProgress(prevModule.id);

  return progress.quizPassed;
}

// ✅ Overall progress for dashboard
export function getOverallProgress(modules) {
  return modules.map((m) => ({
    id: m.id,
    progress: getModuleProgress(m.id),
  }));
}