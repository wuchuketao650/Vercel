 import React from 'react';
 
 interface Activity {
   id: number;
   title: string;
   time: string;
   goalTitle: string;
   goalTime: string;
   type: "info" | "success" | "warning" | "error";
 }
 
 export default function ActivityItem({ activity }: { activity: Activity }) {
   return (
     <div className="mb-4 last:mb-0">
       <div className="flex justify-between items-center">
         <span className="text-sm font-medium text-gray-900">{activity.title}</span>
         <span className="text-xs text-gray-500">{activity.time}</span>
       </div>
       <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
         <span>{activity.goalTitle}</span>
         <span>{activity.goalTime}</span>
       </div>
     </div>
   );
 }
