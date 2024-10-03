export const updateLS = (lijst) => {
    localStorage.removeItem('opgeslagenAgendaPunten');
    localStorage.setItem('opgeslagenAgendaPunten', JSON.stringify(lijst));
};