import ListarCardNoti from "../components/ListarCardNoti"

function NotificacionPage() {
  return (
    <div className="">
        <div className="border-l-2 border-r-2">
          <div className="h-screen overflow-y-scroll scrollbar-hide">
            <div className="ml-3 mr-2 mt-3 items-center justify-center">
              <ListarCardNoti />          
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default NotificacionPage
