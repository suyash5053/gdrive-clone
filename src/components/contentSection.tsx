"use client";

import { useState } from "react"
import { mockData, type Folder, type Item } from "lib/helpers"
import ContentList from "./contentList"
import DriveBreadcrumb from "./driveBreadcrumb"
import { Card, CardContent, CardHeader } from "./ui/card"

const ContentSection = () => {
    const [currentFolder, setCurrentFolder] = useState<Item[]>(mockData)
      const [breadcrumbs, setBreadcrumbs] = useState<Folder[]>([])
    
      const handleContentClick = (folder: Folder) => {
        setCurrentFolder(folder.children)
        setBreadcrumbs([...breadcrumbs, folder])
      }
    
    
      const handleBreadcrumbClick = (index: number) => {
        if (index === -1) {
          setCurrentFolder(mockData)
          setBreadcrumbs([])
        } else {
          const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
          const lastBreadcrumb = newBreadcrumbs[newBreadcrumbs.length - 1];
          if (lastBreadcrumb) {
            setCurrentFolder(lastBreadcrumb.children);
          }
          setBreadcrumbs(newBreadcrumbs)
        }
      }
    return (
        <Card className="bg-background/20 text-white">
            <CardHeader className="">
                <DriveBreadcrumb breadcrumbs={breadcrumbs} onClick={handleBreadcrumbClick}/>
            </CardHeader>
            <CardContent>
                <ContentList items={currentFolder} onFolderClick={handleContentClick}/>
            </CardContent>
      </Card>
    )
}

export default ContentSection