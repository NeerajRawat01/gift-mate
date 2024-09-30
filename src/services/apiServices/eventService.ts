import axios from "axios";
import { Event } from "../../models/event";
import { localStorageService } from "../localStorageServices";

const apiUrl = import.meta.env.VITE_API_URL;
const authToken = localStorageService.getAuthToken();
class EventService {
  static getInstance(): EventService {
    return new EventService();
  }

  public async createEvent(eventData: Event) {
    const response = await axios.post(`${apiUrl}/event/create`, eventData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }

  public async fetchEvents() {
    const response = await axios.get(`${apiUrl}/event/list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }

  public async fetchEventsById(event_id: number) {
    const response = await axios.get(`${apiUrl}/event/${event_id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }
}

export const eventService = EventService.getInstance();
