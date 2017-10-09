"use strict";angular.module("resumeApp").factory("PortfolioService",["$http",function(o){return{getPortfolio:function(t,n){o({method:"GET",url:"portfolio.php?page="+t,headers:{"Content-Type":"application/json"}}).then(function(o){n.portfolio=o.data},function(o){})},getPortfolioPageCount:function(t){o({method:"GET",url:"portfolio-page-count.php",headers:{"Content-Type":"application/json"}}).then(function(o){console.log(o.data),t.portfolioPageCount=o.data.pages},function(o){})}}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvcnRmb2xpby5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJmYWN0b3J5IiwiJGh0dHAiLCJnZXRQb3J0Zm9saW8iLCJwYWdlIiwidm0iLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQ29udGVudC1UeXBlIiwidGhlbiIsInJlc3BvbnNlIiwicG9ydGZvbGlvIiwiZGF0YSIsImdldFBvcnRmb2xpb1BhZ2VDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJwb3J0Zm9saW9QYWdlQ291bnQiLCJwYWdlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQUEsU0FDS0MsT0FBUSxhQUNSQyxRQUFTLG9CQUFzQixRQUFTLFNBQVdDLEdBRWhELE9BQ0lDLGFBQWMsU0FBV0MsRUFBTUMsR0FDM0JILEdBQ0lJLE9BQVEsTUFDUkMsSUFBSyxzQkFBd0JILEVBQzdCSSxTQUNJQyxlQUFnQixzQkFFcEJDLEtBQU0sU0FBMEJDLEdBQ2hDTixFQUFHTyxVQUFZRCxFQUFTRSxNQUN6QixTQUF3QkYsT0FJL0JHLHNCQUF1QixTQUFXVCxHQUM5QkgsR0FDSUksT0FBUSxNQUNSQyxJQUFLLDJCQUNMQyxTQUNJQyxlQUFnQixzQkFFcEJDLEtBQU0sU0FBMEJDLEdBQ2hDSSxRQUFRQyxJQUFJTCxFQUFTRSxNQUNyQlIsRUFBR1ksbUJBQXFCTixFQUFTRSxLQUFLSyxPQUN2QyxTQUF3QlAiLCJmaWxlIjoiUG9ydGZvbGlvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoIFwicmVzdW1lQXBwXCIgKVxyXG4gICAgLmZhY3RvcnkoICdQb3J0Zm9saW9TZXJ2aWNlJywgWyAnJGh0dHAnLCBmdW5jdGlvbiAoICRodHRwICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldFBvcnRmb2xpbzogZnVuY3Rpb24gKCBwYWdlLCB2bSApIHtcclxuICAgICAgICAgICAgICAgICRodHRwKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdwb3J0Zm9saW8ucGhwP3BhZ2U9JyArIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSApLnRoZW4oIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0ucG9ydGZvbGlvID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soIHJlc3BvbnNlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UG9ydGZvbGlvUGFnZUNvdW50OiBmdW5jdGlvbiAoIHZtICkge1xyXG4gICAgICAgICAgICAgICAgJGh0dHAoIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3BvcnRmb2xpby1wYWdlLWNvdW50LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSApLnRoZW4oIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0ucG9ydGZvbGlvUGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5wYWdlcztcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXSApOyJdfQ==