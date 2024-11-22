import React, { useState, useEffect } from 'react';
import './List.css';
import Card from '../Card/Card';

export default function List(props) {
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const filteredTickets = props.ticketDetails.filter(ticket => 
      (ticket.status === props.listTitle && props.groupValue === 'status') ||
      (ticket.priority === props.listTitle && props.groupValue === 'priority') ||
      (ticket.userObj.name === props.listTitle && props.groupValue === 'user')
    );
    setCardCount(filteredTickets.length);
  }, [props.ticketDetails, props.listTitle, props.groupValue]);

  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                'status': {
                  'Backlog': (
                    <div className="list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <g fill="none" stroke="brown" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                          <path d="m4 8l8 4l8-4l-8-4z" />
                          <path fill="gray" d="m12 16l-4-2l-4 2l8 4l8-4l-4-2l-4 2z" />
                          <path d="m8 10l-4 2l4 2m8 0l4-2l4-2" />
                        </g>
                      </svg>
                    </div>
                  ),
                  'Todo': (
                    <div className="list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3" />
                      </svg>
                    </div>
                  ),
                  'In progress': (
                    <div className="list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <g transform="translate(24 0) scale(-1 1)">
                          <path fill="#fdc000" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z" />
                        </g>
                      </svg>
                    </div>
                  ),
                  'Done': (
                    <div className="list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                        <path fill="blue" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Z" />
                      </svg>
                    </div>
                  ),
                  'Cancelled': (
                    <div className="list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="red" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z" />
                      </svg>
                    </div>
                  )
                }[props.listTitle]
              }
            }
            <div className="list-title">
              {
                {
                  'priority': props.priorityList?.map(priorityProperty =>
                    priorityProperty.priority === props.listTitle ? (
                      <>{priorityProperty.name}</>
                    ) : null
                  ),
                  'status': <>{props.listTitle}</>,
                  'user': <>{props.listTitle}</>
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="list-card-items">
          {props.ticketDetails.map(ticket => {
            if (
              (ticket.status === props.listTitle && props.groupValue === 'status') ||
              (ticket.priority === props.listTitle && props.groupValue === 'priority') ||
              (ticket.userObj.name === props.listTitle && props.groupValue === 'user')
            ) {
              return <Card cardDetails={ticket} key={ticket.id} />;
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
