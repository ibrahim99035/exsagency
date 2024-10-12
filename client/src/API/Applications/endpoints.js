const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create a new application
export const createApplication = async (applicationData) => {
    try {
        const response = await fetch(`${BASE_URL}/records/new-apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error creating application');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Update the status of an application by ID
export const updateApplicationStatus = async (applicationId, status) => {
    try {
        const response = await fetch(`${BASE_URL}/records/applications/status/${applicationId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error updating application status');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Get a single application by ID
export const getApplicationById = async (applicationId) => {
    try {
        const response = await fetch(`${BASE_URL}/records/applications/get-one/${applicationId}`, {
            method: 'GET',
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error fetching application');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Get all applications
export const getAllApplications = async () => {
    try {
        const response = await fetch(`${BASE_URL}/records/applications/get-all`, {
            method: 'GET',
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error fetching applications');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Get applications by status
export const getApplicationsByStatus = async (status) => {
    try {
        const response = await fetch(`${BASE_URL}/records/applications/get/status/${status}`, {
            method: 'GET',
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error fetching applications by status');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};