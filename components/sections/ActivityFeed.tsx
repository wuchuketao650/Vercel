 "use client";
 
 import React from 'react';
 import { useStore } from '@/lib/store';
 import ActivityItem from '../ui/ActivityItem';
 
 export default function ActivityFeed() {
   const activities = useStore((s) => s.activities);
 
   if (!activities || activities.length === 0) {
     return null;
   }
 
   return (
     <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
       <h3 className="text-sm font-bold text-gray-900 mb-4">Activity Feed</h3>
       <div className="space-y-2">
         {activities.map((activity) => (
           <ActivityItem key={activity.id} activity={activity} />
         ))}
       </div>
     </div>
   );
 }
