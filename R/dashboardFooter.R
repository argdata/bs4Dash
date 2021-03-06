#' Create a Boostrap 4 dashboard footer
#'
#' Build an adminLTE3 dashboard footer
#'
#' @param ... Left text.
#' @param copyrights Copyrights, if any.
#' @param right_text Right text.
#' 
#' @author David Granjon, \email{dgranjon@@ymail.com}
#'
#' @export
bs4DashFooter <- function(..., copyrights = NULL, right_text = NULL) {

  shiny::tags$footer(
    class = "main-footer",

    # right element
    shiny::tags$div(
      class = "float-right d-none d-sm-inline",
      right_text
    ),

    # left element
    shiny::tags$strong(
      copyrights
    ),
    ...
  )
}
