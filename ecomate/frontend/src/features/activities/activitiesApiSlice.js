import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

// Create entity adapter
const activitiesAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.createdAt < b.createdAt ? 1 : -1)
});

// Initial state
const initialState = activitiesAdapter.getInitialState();

export const activitiesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getActivities: builder.query({
            query: () => '/activities',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                // ✅ Map _id to id for RTK
                const loadedActivities = responseData.map(activity => {
                    activity.id = activity._id;
                    return activity;
                });
                return activitiesAdapter.setAll(initialState, loadedActivities);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Activity', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Activity', id }))
                    ];
                } else {
                    return [{ type: 'Activity', id: 'LIST' }];
                }
            }
        }),
    }),
});

export const {
    useGetActivitiesQuery,
} = activitiesApiSlice;

// Select entire query result
export const selectActivitiesResult = activitiesApiSlice.endpoints.getActivities.select();

// Memoized selector for normalized data
const selectActivitiesData = createSelector(
    selectActivitiesResult,
    activitiesResult => activitiesResult.data ?? initialState
);

// Export entity adapter selectors
export const {
    selectAll: selectAllActivities,
    selectById: selectActivityById,
    selectIds: selectActivityIds
} = activitiesAdapter.getSelectors(state => selectActivitiesData(state));
