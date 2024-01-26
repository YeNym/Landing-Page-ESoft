const baseURL = () => {
    var url = document.location.origin;
    var parser = document.createElement('a');
    parser.href = url;
    var ipAddress = parser.hostname;
    return " http://" + ipAddress
}

const API_URL = baseURL();

export const postFeedback = async (body) => {
    try {
        const response = await fetch(`${API_URL}/api/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const result = await response.text();
        return result;
    } catch (error) {
        console.error('Error posting feedback:', error);
        throw error;
    }
};

export const getAdminData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/getadmin`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching admin data:', error);
        throw error;
    }
};

export const postLoginAndGetAnswer = async (body) => {
    try {
        const response = await fetch(`${API_URL}/api/postLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error posting feedback:', error);
        throw error;
    }
};