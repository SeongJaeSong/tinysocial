module.exports.Query = {
  events: async (_, {pageSize, after = 0, eventFilter, eventSort}, {dataSources}) => {
    if (pageSize > 50) {
      pageSize = 50;
    }
    const eventIds = dataSources.eventAPI.getIdsOfEvent({
      limit: pageSize,
      offset: after,
      tagIds: eventFilter.tagIds,
      order: eventSort,
    });
    if (pageSize > eventIds.length) {
      pageSize = eventIds.length;
    }
    return {
      cursor: after + pageSize,
      id: eventIds,
    };
  },

  event: async (_, {id}, {dataSources}) => {
    const event = dataSources.eventAPI.getIdOfEvent(id);
    return event;
  },

  me: async (_, __, {userId}) => {
    return userId;
  },

  user: async (_, {userId}, {dataSources}) => {
    const user = dataSources.userAPI.getIdOfUser(userId);
    return user;
  },

  myEvents: async (_, {upcomingOrPast}, {dataSources, userId}) => {
    let eventIds;
    if (upcomingOrPast === 'upcoming') {
      eventIds = dataSources.eventAPI.getUpcomingEventIdsOfEvent(userId);
    } else if (upcomingOrPast === 'past') {
      eventIds = dataSources.eventAPI.getPastEventIdsOfEvent(userId);
    } else {
      return null;
    }
    if (eventIds === null) {
      return null;
    }
    return eventIds;
  },

  userReviews: async (_, {userId, eventId}, {dataSources, userId: currentUserId}) => {
    if (userId === undefined) {
      userId = currentUserId;
    }
    const reviews = dataSources.reviewAPI.getIdsOfReview({userId, eventId});
    return reviews;
  },

  tagNames: async (_, {pageSize, after = 0}, {dataSources}) => {
    const tagIds = dataSources.getIdsOfTag({
      limit: pageSize,
      offset: after,
    });
    
    return {

      tagIds,
    };
  },
};
