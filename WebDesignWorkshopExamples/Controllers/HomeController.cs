using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebDesignWorkshopExamples.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index_Pre()
        {
            return View();
        }
        
        public ActionResult HtmlTags()
        {
            return View();
        }
        public ActionResult HtmlForm()
        {
            return View();
        }
        public ActionResult TraditionalWebsite()
        {
            return View();
        }
        public ActionResult AudioVideo()
        {
            return View();
        }
        public ActionResult CssStyle()
        {
            return View();
        }
        public ActionResult JavaScript()
        {
            return View();
        }
        public ActionResult Alertify()
        {
            return View();
        }
        public ActionResult CheckAllCssFormat()
        {
            return View();
        }

        public ActionResult TekationEditor(string p = "")
        {
            ViewBag.H1 = "";
            switch (p)
            {
                case "canvas":
                    ViewBag.H1 = "HTML5 Canvas";
                    break;
                case "paragraph":
                    ViewBag.H1 = "HTML Paragraphs";
                    break;
                case "anchor":
                    ViewBag.H1 = "Links/Anchor Tag";
                    break;
                case "br":
                    ViewBag.H1 = "Line Break";
                    break;
                case "hr":
                    ViewBag.H1 = "Horizontal Rule";
                    break;
                case "img":
                    ViewBag.H1 = "HTML Images";
                    break;
                case "style":
                    ViewBag.H1 = "Style Tag";
                    break;
                case "script-link":
                    ViewBag.H1 = "Script & Link Tags";
                    break;
                case "ul":
                    ViewBag.H1 = "Unordered Lists";
                    break;
                case "ol":
                    ViewBag.H1 = "Ordered Lists";
                    break;
                case "dl":
                    ViewBag.H1 = "Description Lists";
                    break;
                case "formatting":
                    ViewBag.H1 = "Formatting Tags";
                    break;
                case "datalist":
                    ViewBag.H1 = "Datalist HTML5";
                    break;
                case "svg":
                    ViewBag.H1 = "SVG Graphics";
                    break;
                case "css-transform":
                    ViewBag.H1 = "CSS3 Transform - 2D & 3D";
                    break;
            }
            ViewBag.Page = p;
            return View();
        }
        public ActionResult CssAnimation()
        {
            return View();
        }
        public ActionResult Tools_Animations()
        {
            return View();
        }
        public ActionResult PPT(string p="")
        {
            ViewBag.H1 = "";
            switch(p)
            {
                case "heading":
                    ViewBag.H1 = "HTML Headings";
                    break;
                case "paragraph":
                    ViewBag.H1 = "HTML Paragraphs";
                    break;
                case "anchor":
                    ViewBag.H1 = "Links/Anchor Tag";
                    break;
                case "br":
                    ViewBag.H1 = "Line Break";
                    break;
                case "hr":
                    ViewBag.H1 = "Horizontal Rule";
                    break;
                case "img":
                    ViewBag.H1 = "HTML Images";
                    break;
                case "style":
                    ViewBag.H1 = "Style Tag";
                    break;
                case "script-link":
                    ViewBag.H1 = "Script & Link Tags";
                    break;
                case "ul":
                    ViewBag.H1 = "Unordered Lists";
                    break;
                case "ol":
                    ViewBag.H1 = "Ordered Lists";
                    break;
                case "dl":
                    ViewBag.H1 = "Description Lists";
                    break;
                case "formatting":
                    ViewBag.H1 = "Formatting Tags";
                    break;
                case "datalist":
                    ViewBag.H1 = "Datalist HTML5";
                    break;
                case "bsmodal":
                    ViewBag.H1 = "Bootstrap Modal";
                    break;
                case "bstabs":
                    ViewBag.H1 = "Bootstrap Tabs";
                    break;
                case "bscollapse":
                    ViewBag.H1 = "Bootstrap Collapse - Accordion";
                    break;
            }
            ViewBag.Page = p;
            return View();
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult GetDynamicHTMLResult(string html_code, string css_code, string js_code)
        {
            ViewBag.Html = html_code;
            ViewBag.Css = css_code;
            ViewBag.Js = js_code;
            return View();
        }

        public ActionResult LoginBsModal()
        {
            return View();
        }
    }
}
