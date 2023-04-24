const url = 'http://176.58.115.160:3000/api/v1/';
const loginUrl = url + 'login/';
const accountsBaseUrl = url + 'accounts/';
const organizationBaseUrl = url + 'organizations/';
const projectBaseUrl = url + 'projects/';
const attendeeBaseUrl = url + 'attendees/';
const eventBaseUrl = url + 'events/';

export const environment = {
    ///////////////** USER URLS **///////////////////
    loginUser: loginUrl,
    registerUser: accountsBaseUrl + 'register/',
    refreshToken: accountsBaseUrl + 'token/refresh/',
    verifyToken: accountsBaseUrl + 'token/verify',

    getUserProfile: accountsBaseUrl + 'profile/',
    updateUserProfile: accountsBaseUrl + 'profile/',

    ///////////////** Organization URLS **///////////////////
    createOrganization: organizationBaseUrl,
    getAllOrganization: organizationBaseUrl,
    updateOrganization: organizationBaseUrl,
    getOneOrganization: organizationBaseUrl,

    createOrganizationMember: organizationBaseUrl + 'member',
    getAllOrganizationMember: organizationBaseUrl + 'member',
    deleteOrganizationMember: organizationBaseUrl + 'member/',
    getOneOrganizationMember: organizationBaseUrl + 'member/',

    ///////////////** Projects URLS **///////////////////
    getAllProjects: projectBaseUrl,
    createProjects: projectBaseUrl,
    updateProject: projectBaseUrl,
    getSingleProjects: projectBaseUrl,

    ///////////////** Attendee URLS **///////////////////
    getAllAttendees: attendeeBaseUrl,
    createAttendees: attendeeBaseUrl,
    getSingleAttendees: attendeeBaseUrl,
    updateAttendees: attendeeBaseUrl,

    ///////////////** Events URLS **///////////////////
    getAllEvents: eventBaseUrl,
    createEvents: eventBaseUrl,
    getSingleEvents: eventBaseUrl,

    getAllEventAttendees: eventBaseUrl + 'attendees/',
    createEventAttendees: eventBaseUrl + 'attendees/',
    getSingleEventAttendees: eventBaseUrl + 'attendees/',

    getAllEventAttendeesCheckIn: eventBaseUrl + 'attendees/check-in',
    createEventAttendeesCheckIn: eventBaseUrl + 'attendees/check-in',
    getSingleEventAttendeesCheckIn: eventBaseUrl + 'attendees/check-in/',
    updateEventAttendeesCheckIn: eventBaseUrl + 'attendees/check-in/',




    


    






};
